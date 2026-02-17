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
            'https://media.themoviedb.org/t/p/w600_and_h900_face/9rVS0ZOcWvioLW6jFhsF47mTt0a.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/g9d4tX690c1vjdRcK7TNcfVSd7W.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/sm4GAuVc07hU7Oj6DgPnWCIRcHS.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/ckdNCX3xNWrGWxzk44TdzFN58JB.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/8L9d3rU1eVeIoxdJvprz5A5OXXo.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/t7cAr0fUM2XEJIzNnSUR0vPS8AS.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/7ppYIOB2ssNynJUU1i6FX4KqYly.jpg',
            'https://media.themoviedb.org/t/p/w600_and_h900_face/5KuqrUbp4YfAWNtmtMEat8tCN19.jpg',
        ];
           function afficherImageAleatoire() {
           const indexAleatoire = Math.floor(Math.random() * images.length);
           const imageAleatoire = images[indexAleatoire];
          document.getElementById('imageAleatoire').src = imageAleatoire;
        }
        window.onload = afficherImageAleatoire;
