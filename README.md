# Summarization audios using OpenAI & NodeJS  
<p> <a href="./LICENSE"><img src="https://img.shields.io/github/license/nuxt/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="License"></a>
<a href="./LICENSE"><img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="License"></a> </p>


[ENG-US]
This repository contains a step-by-step guide and sample code to demonstrate how to use Node.js in conjunction with OpenAI's API to perform topic summarization from audio. Learn how to integrate natural language processing and artificial intelligence technologies to effectively and efficiently summarize audio content.

[PT-BR]
Este repositório contém um guia passo a passo e amostras de código para demonstrar como usar o Node.js em conjunto com a API da OpenAI para realizar a sumarização de tópicos a partir de áudio. Aprenda a integrar tecnologias de processamento de linguagem natural e inteligência artificial para resumir conteúdo de áudio de maneira eficaz e eficiente


## Getting Started

Set your OpenAPI Key in .env and use the following commands, this will run the project with all the necessary files and dependencies to transcribe and resume your audios files:

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository 
```bash
$ git clone https://github.com/Andrerodrigues0018/nodejs-audio-summarization-openai.git
```
3. Navigate into the project directory

```bash
$ cd nodejs-audio-summarization-openai
```

4. Install the requirements

```bash
$ npm install
```

5. Make a copy of the example environment variables file

On Linux systems:
```bash
$ cp .env.example .env
```
On Windows:
```powershell
$ copy .env.example .env
```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

```bash
$ node index.js
```
8. Make a Post in http://localhost:3000/upload using FormData
```bash
$ curl --request POST \
  --url http://localhost:3000/upload \
  --header 'Content-Type: multipart/form-data' \
  --form 'file=@C:\Users\###\Desktop\example.mp3'
```
