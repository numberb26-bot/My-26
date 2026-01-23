   const images = [
            'https://media.themoviedb.org/t/p/w600_and_h900_face/l6mNo6KU3KgnilItWgRKjt166Y2.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/yNrMIGy1eG0cjd2WSrHz2OcUWEy.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/yipCOSHafg7wdsiDrkjd79YAN61.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/aZnC4qLFrhtNsbQQ8q3OJ7U2T9B.jpg'
        ];
           function afficherImageAleatoire() {
           const indexAleatoire = Math.floor(Math.random() * images.length);
           const imageAleatoire = images[indexAleatoire];
          document.getElementById('imageAleatoire').src = imageAleatoire;
        }
        window.onload = afficherImageAleatoire;