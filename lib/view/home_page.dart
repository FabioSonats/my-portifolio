import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Seção 1: Home
            Container(
              height: MediaQuery.of(context).size.height,
              padding: EdgeInsets.all(20),
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Olá, eu sou Fabio!',
                      style:
                          TextStyle(fontSize: 36, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 20),
                    Text(
                      'Desenvolvedor Flutter | Full Stack Enthusiast',
                      style: TextStyle(fontSize: 18, color: Colors.grey),
                    ),
                    SizedBox(height: 40),
                    ElevatedButton(
                      onPressed: () {
                        // Rola para a próxima seção
                        Scrollable.ensureVisible(
                          context,
                          duration: Duration(seconds: 1),
                          curve: Curves.easeInOut,
                        );
                      },
                      child: Text('Saiba Mais'),
                    ),
                  ],
                ),
              ),
            ),

            // Seção 2: Tecnologias
            Container(
              height: MediaQuery.of(context).size.height,
              padding: EdgeInsets.all(20),
              color: Colors.grey[200],
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Tecnologias que Trabalho',
                      style:
                          TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 20),
                    Wrap(
                      spacing: 10,
                      runSpacing: 10,
                      children: [
                        Chip(label: Text('Flutter')),
                        Chip(label: Text('Dart')),
                        Chip(label: Text('Firebase')),
                        Chip(label: Text('React')),
                        Chip(label: Text('TypeScript')),
                      ],
                    ),
                  ],
                ),
              ),
            ),

            // Seção 3: Projetos
            Container(
              height: MediaQuery.of(context).size.height,
              padding: EdgeInsets.all(20),
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Projetos Selecionados',
                      style:
                          TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 20),
                    // Exemplo de card de projeto
                    Card(
                      child: Padding(
                        padding: EdgeInsets.all(16),
                        child: Column(
                          children: [
                            Text(
                              'Ecommerce Website',
                              style: TextStyle(
                                  fontSize: 20, fontWeight: FontWeight.bold),
                            ),
                            SizedBox(height: 10),
                            Text(
                              'Descrição breve do projeto.',
                              style: TextStyle(fontSize: 16),
                            ),
                            SizedBox(height: 10),
                            ElevatedButton(
                              onPressed: () {
                                // Link para o projeto
                              },
                              child: Text('Ver Projeto'),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),

            // Seção 4: Contato
            Container(
              height: MediaQuery.of(context).size.height,
              padding: EdgeInsets.all(20),
              color: Colors.grey[200],
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Entre em Contato',
                      style:
                          TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 20),
                    Text('Email: p.sonats@gmail.com'),
                    SizedBox(height: 10),
                    Text('LinkedIn: [Seu LinkedIn]'),
                    SizedBox(height: 10),
                    Text('GitHub: [Seu GitHub]'),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
