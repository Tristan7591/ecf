#!/bin/bash

# Installer les dépendances Angular
npm install

# Installer les types pour les tests
npm install --save-dev @types/jasmine @types/node

# Installer les dépendances de développement supplémentaires
npm install --save-dev karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter 