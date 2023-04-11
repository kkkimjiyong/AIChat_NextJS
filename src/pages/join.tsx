import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Label } from "@/components/common/Label";
import Header from "@/components/join/Header";
import { Layout } from "@/global/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";

export default function Join({ data }: { data: any }) {
  const router = useRouter();

  const [makeRoom, setMakeRoom] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>("");
  const [roomPeople, setRoomPeople] = useState<string>("");
  const [roomlist, setRoomList] = useState<any[]>([...data]);
  const postNewRoom = async () => {
    const payload = {
      roomName,
      roomPeople,
    };
    try {
      const response = await axios.post("/api/newRoom", payload);
      console.log(response);
      setRoomList([
        ...data,
        { roomid: response.data, roomname: roomName, roompeople: roomPeople },
      ]);
    } catch (error) {}
  };

  return (
    <Layout>
      <Header setMakeRoom={setMakeRoom} />
      {makeRoom && (
        <StyledMakeRoomModal>
          <Label style={{ marginTop: "50px" }}>방 이름</Label>
          <Input onChange={(e) => setRoomName(e.target.value)} />
          <Label style={{ marginTop: "50px" }}>방 인원</Label>
          <Input onChange={(e) => setRoomPeople(e.target.value)} />
          <Button onClick={() => postNewRoom()}>방 생성</Button>
        </StyledMakeRoomModal>
      )}
      {roomlist.map((el: any) => {
        return (
          <div
            onClick={() =>
              router.push({
                pathname: `/room/[roomid]`,
                query: { roomid: el.roomid },
              })
            }
            key={el.roomid}
          >
            {el.roomname}
          </div>
        );
      })}
    </Layout>
  );
}

const StyledMakeRoomModal = styled.div`
  position: relative;
  margin-top: 100px;
  height: 60%;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 3px gray;
`;
export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:3000/api/getRooms`);
  const data = res.data;

  return { props: { data } };
}
