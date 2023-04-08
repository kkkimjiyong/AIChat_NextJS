import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Label } from "@/components/common/Label";
import Header from "@/components/join/Header";
import { Layout } from "@/global/Layout";
import React, { useState } from "react";
import styled from "styled-components";
export default function Join() {
  const [makeRoom, setMakeRoom] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>("");
  const [roomCount, setRoomCount] = useState<any>(0);
  const [roomList, setRoomList] = useState<any>([]);
  console.log(roomList);
  return (
    <Layout>
      <Header setMakeRoom={setMakeRoom} />
      {makeRoom && (
        <StyledMakeRoomModal>
          <Label style={{ marginTop: "50px" }}>방 이름</Label>
          <Input onChange={(e) => setRoomName(e.target.value)} />
          <Label style={{ marginTop: "50px" }}>방 인원</Label>
          <Input
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRoomCount(e.target.value)
            }
          />
          <Button
            style={{}}
            onClick={() => {
              setMakeRoom(false);
              setRoomList((prev: any) => [
                ...prev,
                { name: roomName, count: roomCount },
              ]);
            }}
          >
            방 생성
          </Button>
        </StyledMakeRoomModal>
      )}
      {roomList?.map((room: any, idx: any) => {
        return <StyledRoomItem key={idx}>{room.name}</StyledRoomItem>;
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

const StyledRoomItem = styled.div`
  width: 85%;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  font-size: 24px;
`;
