import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Portfólio de Fabio'),
      ),
      body: SingleChildScrollView(
        // Adiciona a capacidade de rolar
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Olá, eu sou Fabio!',
                style: Theme.of(context).textTheme.headlineLarge,
              ),
              SizedBox(height: 20),
              Text(
                'Desenvolvedor Flutter | Full Stack Enthusiast',
                style: Theme.of(context).textTheme.bodyLarge,
              ),
              SizedBox(height: 40),
              ElevatedButton(
                onPressed: () {
                  // Navegar para a próxima seção
                },
                child: Text(
                  'Saiba Mais',
                  style: Theme.of(context).textTheme.labelLarge,
                ),
              ),
              // Adicione mais conteúdo aqui para testar a rolagem
              Container(
                height: 1000, // Altura grande para forçar a rolagem
                color: Colors.green.withOpacity(0.1),
                child: Center(
                  child: Text(
                    'Mais conteúdo abaixo...',
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
