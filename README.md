# 🚗 Sistema de Gerenciamento de Frotas - CRUD Completo

> Projeto Full Stack desenvolvido para consolidar aprendizados em Spring Boot e Angular, englobando desde a construção da API REST, interface responsiva até o deploy completo na nuvem AWS.

---

## 📺 Demonstração do Projeto

### 💻 Aplicação em Execução (Interface & Fluxo)
<!-- ARRASTE E SOLTE O SEU VÍDEO DE 1min23s EXATAMENTE NA LINHA ABAIXO -->


### 🗄️ Integração com o Banco de Dados (MySQL no Ubuntu/AWS EC2)
<!-- ARRASTE E SOLTE O SEU VÍDEO DO TERMINAL OU PRINTS DO MYSQL NA LINHA ABAIXO -->


---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **Frontend:** Angular, TypeScript, MDBootstrap (Layout Responsivo)
* **Backend:** Java, Spring Boot (Spring Web, Spring Data JPA)
* **Banco de Dados:** MySQL
* **DevOps & Cloud:** AWS EC2 (Instância Ubuntu), Servidor Web Apache

---

## 🚀 O que foi desenvolvido e aplicado?

### 🔷 Backend (Spring Boot)
* Arquitetura em camadas dividida rigorosamente em: `Entity`, `Repository`, `Service` e `Controller`.
* Criação de endpoints REST para operações completas de **CRUD** (POST, GET, PUT, DELETE) com relacionamentos entre as entidades (Carros, Marcas e Acessórios).
* Validações de regras de negócio no servidor.

### 🔷 Frontend (Angular)
* Construção de uma interface limpa, com tela de Login estruturada e painéis responsivos.
* Uso de rotas protegidas por Guards, componentização inteligente e gerenciamento de modais dinâmicos para edição e exclusão.
* Consumo assíncrono da API do Spring utilizando `HttpClient` e manipulação de fluxos com RxJS.

### 🔷 Infraestrutura & Cloud (AWS)
* Provisionamento e configuração de um servidor virtual **EC2 rodando Ubuntu**.
* Instalação e configuração do banco de dados MySQL via terminal SSH.
* Configuração do **Apache web server** para servir os arquivos estáticos compilados do Angular (`dist`) e execução em segundo plano do pacote `.jar` do ecossistema Spring.

<img width="1356" height="613" alt="4f9bd46b-4a04-46b4-b21b-b3cea0343582" src="https://github.com/user-attachments/assets/743c8ee9-675b-4607-88b0-6e6da0298dbf" />
<br>
<img width="1356" height="706" alt="f8612a0e-54eb-4f2d-822d-f956d3ae183b" src="https://github.com/user-attachments/assets/44d475a1-123a-4c34-abe3-17cdd698b897" />
<br>
<img width="1356" height="645" alt="51365c7c-5957-45a9-a863-a25da155493c" src="https://github.com/user-attachments/assets/38b6ba92-fbb7-4936-9bd0-832442130eb9" />
<br>



