import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Label } from "@/components/common/Label";
import Header from "@/components/join/Header";
import { Layout } from "@/global/Layout";
import React, { useState } from "react";
import styled from "styled-components";
export default function Join() {
  const [makeRoom, setMakeRoom] = useState<boolean>(false);

  return (
    <Layout>
      <Header setMakeRoom={setMakeRoom} />
      {makeRoom && (
        <StyledMakeRoomModal>
          <Label style={{ marginTop: "50px" }}>방 이름</Label>
          <Input />
          <Label style={{ marginTop: "50px" }}>방 인원</Label>
          <Input />
          <Button style={{}}>방 생성</Button>
        </StyledMakeRoomModal>
      )}
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
