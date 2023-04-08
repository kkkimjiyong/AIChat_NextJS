import Profile from "@/components/room/Profile";
import { Layout } from "@/global/Layout";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Input } from "@/components/common/Input";

export default function Room() {
  const apiKey = "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";

  const [stop, setStop] = useState<boolean>(false);
  const [mine, setMine] = useState<string>("");
  const [messages, setMessages] = useState<any>([]);

  const chatAi = async (type: string) => {
    let prompt = "";
    const lastMessage = messages.at(-1);
    const ai = type === "ai";
    if (ai) {
      prompt = lastMessage;
    } else {
      prompt = mine;
    }
    setMine("");
    if (prompt.trim().length === 0) {
      return;
    }
    setStop(true);
    try {
      // axios를 이용해서 chatgpt와 통신
      const pos = await axios.post(
        "https://api.openai.com/v1/completions",
        // docs복사 prompt에 내가 한 질문 입력
        {
          model: "text-davinci-003",
          prompt: prompt,
          temperature: 0.9,
          max_tokens: 521,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: [" Human:", " AI:"],
        },
        // 발급받은 api키 env로 입력
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      setStop(false);
      setMessages((prev: any) => prev.concat(pos.data.choices[0].text));
    } catch (error) {
      alert("올바르지않은 API KEY입니다!");
      console.log(error);
    }
  };

  useEffect(() => {
    if (messages.length !== 0 && !stop) {
      chatAi("ai");
    }
  }, [messages, stop]);

  return (
    <Layout>
      <StyledWrap>
        <StyledChatContainer>
          {messages.map((el: any) => {
            return (
              <StyledMessageBox key={el}>
                <Profile />
                <StyledMessage>{el}</StyledMessage>
              </StyledMessageBox>
            );
          })}
        </StyledChatContainer>

        <StyledInputBox>
          <Input
            disabled={stop}
            style={{ position: "absolute" }}
            value={mine}
            onChange={(e) => setMine(e.target.value)}
          />
          <svg
            onClick={() => chatAi("human")}
            style={{ position: "absolute", right: "40px", bottom: "2px" }}
            width="25"
            height="41"
            viewBox="0 0 35 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.6687 10.4258L2.47659 17.8227L17.1765 24.3146L32.6687 10.4258Z"
              stroke="#26D9FD"
              stroke-width="3"
              stroke-linejoin="round"
            />
            <path
              d="M17.2247 24.3358L21.9008 39.2691L32.5681 10.2356"
              stroke="#26D9FD"
              stroke-width="3"
              stroke-linejoin="round"
            />
          </svg>
        </StyledInputBox>
      </StyledWrap>
    </Layout>
  );
}

const StyledWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledChatContainer = styled.div`
  width: 100%;
  height: 80%;
`;

const StyledMessageBox = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  &.d {
    flex-direction: row-reverse;
    justify-content: end;
  }
`;

const StyledMessage = styled.div`
  padding: 10px;
  border-radius: 10px;
  max-width: 200px;
  max-height: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: gray;
  margin: 0px 20px;
`;

const StyledInputBox = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;
`;
