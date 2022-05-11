# Cadastro de carro

**RF**
Deve ser possivel cadastrar um carro.
Deve ser possivel listar todas as categorias.

**RN**
Não deve ser possivel cadastrar um carro com uma placa já existente
Não deve ser possivel alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado por padrão, com disponibilidade.
O usuário responsável pelo cadastro deve ser um usuário admisnitrador.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponiveis.
Deve ser possível listar todos os carros disponiveis pelo nome da categoria.
Deve ser possível listar todos os carros disponiveis pelo nome da marca.
Deve ser possível listar todos os carros disponiveis pelo nome do carro.

**RN**
O usuárrio não precisa estar logado no sistema.

# Cadastro de especificação no carro

**Rf**
Deve ser possovel cadastrar uma especificação para um carro
Deve ser possivel listar as especificações
Deve ser possivel listar todos os carros

**RN**
Não deve ser possivel cadastrar uma especificação para um caro não cadastrado.
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.
O usuário não precisa estar logado no sistema.

# Cadastro de imagem do carro

**RF**
Deve ser possivel cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário não precisa estar logado no sistema.

# Aluguel

**RF**
Deve ser possivel cadastrar um aluguel.

**RNF**

**RN**
O aluguel deve ter a duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.
O usuário deve estar logado na aplicação.

# Devolução de carro 

**RF**
Deve ser possível realizar i devolução de um carro

**RN**
Se o carro gor devolvido com menos de 24 horas, deverá ser cobrado a diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.

# Listagem de alugueis para usuario

**RF**
Deve ser possivel realizar a busca de todos os alugueis para o usuario.

**RN**
O usuario deve estar logado na aplicacao.

# Recuperar Senha

**RF**
- Deve ser possivel o usuario recuperar a senha informando o e-mail
- O ussuario deve receber um e-mail com o passo a passo para a recuperacao da senha
- O usuario deve conseguir inserir uma nova de
  
**RN**
- O usuario precisa informar uma nova senha
- O link enviado para a recuperacao deve expirar em 3 meses