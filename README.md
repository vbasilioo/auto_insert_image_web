
<div align="center">
  <a href="https://github.com/vbasilioo/auto_insert_image_api">
    <img src="https://www.upload.ee/image/17349608/logo.png" alt="Logo" width="260" height="70">
  </a>

  <h3 align="center">AUTO Insert Image WEB</h3>

  <p align="center">
    WEB desenvolvida com Next.js, Typescript, Tailwind CSS, Shadcn, Aceternity e Docker.
  </p>
</div>

## Descrição

Este projeto é uma aplicação web construída com Next.js 14, utilizando o poder do Tailwind CSS para estilização, Shadcn para componentes, Aceternity para integração com blockchain e TypeScript para segurança de tipos. A aplicação tem como objetivo proporcionar uma experiência de usuário fluida, aproveitando tecnologias modernas para desempenho e escalabilidade.

## Recursos

- **Next.js 14**: Um framework React para construção de aplicações rápidas e amigáveis.
- **Tailwind CSS**: Um framework CSS utilitário para desenvolvimento rápido de UI.
- **Shadcn**: Uma biblioteca de componentes acessíveis para aprimorar o design da UI.
- **Aceternity**: Integração com a blockchain Aceternity para recursos descentralizados.
- **TypeScript**: Fornece segurança de tipos e uma experiência de desenvolvimento aprimorada.
- **Docker**: Contêineres para facilitar o desenvolvimento e a implantação.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- Docker
- Docker Compose

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/vbasilioo/auto_insert_image_web
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd auto_insert_image_web
   ```

3. Inicie os contêineres Docker:

   ```bash
   docker-compose up
   ```

A aplicação estará disponível em `http://localhost:3000`.

## Desenvolvimento

Para iniciar o servidor de desenvolvimento, você pode usar o comando do Docker:

```bash
docker-compose up
```

## Construindo para Produção

Para construir a aplicação para produção, siga estas etapas:

1. Pare os contêineres em execução:

   ```bash
   docker-compose down
   ```

2. Inicie a construção da aplicação:

   ```bash
   docker build -t nome-da-imagem .
   ```

3. Inicie a aplicação em produção:

   ```bash
   docker run -p 3000:3000 nome-da-imagem
   ```

## Demonstração

### Vídeo
<div align="center">
    <video width="600" controls>
        <source src="https://youtu.be/oJsMdDedV7g" type="video/mp4">
        Seu navegador não suporta a tag de vídeo.
    </video>
</div>

### Imagens
<div align="center">
    <img src="https://i.imgur.com/w94Ufin.png" alt="Imagem 1" width="400" />
    <img src="https://i.imgur.com/ysPTLaR.png" alt="Imagem 2" width="400" />
    <img src="https://i.imgur.com/eZpNejl.png" alt="Imagem 3" width="400" />
    <img src="https://i.imgur.com/IGFY6ES.png" alt="Imagem 4" width="400" />
    <img src="https://i.imgur.com/SNDVx6V.png" alt="Imagem 5" width="400" />
    <img src="https://i.imgur.com/AoSERQL.png" alt="Imagem 6" width="400" />
    <img src="https://i.imgur.com/5wTPzmB.png" alt="Imagem 7" width="400" />
    <img src="https://i.imgur.com/D2wvbSl.png" alt="Imagem 8" width="400" />
    <img src="https://i.imgur.com/oUZPvJi.png" alt="Imagem 9" width="400" />
    <img src="https://i.imgur.com/XB1MsuO.png" alt="Imagem 10" width="400" />
</div>
