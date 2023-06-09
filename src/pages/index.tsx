import Head from "next/head";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Layout } from "@/global/Layout";
import { Input } from "@/components/common/Input";
import styled from "styled-components";
import { Button } from "@/components/common/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { Label } from "@/components/common/Label";

export default function Home() {
  const router = useRouter();
  const [apiKey, setApiKey] = useState<string>("");
  console.log(apiKey);
  const chatAi = async (data?: string) => {
    try {
      // axios를 이용해서 chatgpt와 통신
      const pos = await axios.post(
        "https://api.openai.com/v1/completions",
        // docs복사 prompt에 내가 한 질문 입력
        {
          model: "text-davinci-003",
          prompt: `hello`,
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
      router.push("join");
    } catch (error) {
      alert("올바르지않은 API KEY입니다!");
      console.log(error);
    }
  };

  const prac_getData = async () => {
    try {
      const response = await axios.get("/api/hello");
      console.log(response);
    } catch (error) {}
  };
  useEffect(() => {
    prac_getData();
  }, []);

  return (
    <>
      <Head>
        <title>AI ChatRoom</title>
        <meta name="description" content="인공지능과 대화해보세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <svg
          style={{ margin: "200px 0px 130px 0px" }}
          width="108"
          height="104"
          viewBox="0 0 108 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M105.823 0V58.9208L0.0898438 0V4.17033V44.3842V104H1.3566V45.0991L107.09 104V100.326V59.6158V0H105.823Z"
            fill="#26D9FD"
          />
        </svg>
        <Label>API KEY</Label>
        <Input
          placeholder="API KEY를 입력해주세요"
          onChange={(e) => setApiKey(e.target.value)}
        />
        <Button onClick={() => chatAi()}>Login</Button>
        <StyledBottomTxt>KEY 발급받는 방법</StyledBottomTxt>
      </Layout>
    </>
  );
}

const StyledBottomTxt = styled.div`
  position: absolute;
  bottom: 50px;
  text-decoration: underline;
  font-size: 14px;
`;
