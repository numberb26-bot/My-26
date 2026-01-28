   const images = [
            'https://media.themoviedb.org/t/p/w600_and_h900_face/l6mNo6KU3KgnilItWgRKjt166Y2.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/yNrMIGy1eG0cjd2WSrHz2OcUWEy.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/yipCOSHafg7wdsiDrkjd79YAN61.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/aZnC4qLFrhtNsbQQ8q3OJ7U2T9B.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/9h8RRB8KTkLPteVsQxXJJlTkuIm.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/6CD90BQEDexEIMqIwMSnbJStF5x.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/1xn4Yba0QIycF97UNjzi4TIoQRX.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/c9EVwGbTRkJbCFjAvImbUq59eJY.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/qaJWF2bFN7VYZKmTephsSYIbd8d.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/u7eYBLzHr0KAUv9Z2w8UpNvaYXS.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/q5TgDiLeWCF6Pu8PbZ0yX5o925C.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/ri5AwG4a9uaJg4aNaQqK8smVJQ7.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/tbzLbS5Mf1d5VbqeFOydRsXzJbW.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/xMriycO3joP1NFjbNwHmWyFH6pS.jpg',
        ];
           function afficherImageAleatoire() {
           const indexAleatoire = Math.floor(Math.random() * images.length);
           const imageAleatoire = images[indexAleatoire];
          document.getElementById('imageAleatoire').src = imageAleatoire;
        }
        window.onload = afficherImageAleatoire;
