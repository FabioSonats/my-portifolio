import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Olá, eu sou Fabio!',
              style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            Text(
              'Flutter Developer | Full Stack Enthusiast',
              style: TextStyle(fontSize: 18, color: Colors.grey),
            ),
            SizedBox(height: 40),
            ElevatedButton(
              onPressed: () {
                // Navegar para a seção "Sobre Mim"
              },
              child: Text('Saiba Mais'),
            ),
          ],
        ),
      ),
    );
  }
}
