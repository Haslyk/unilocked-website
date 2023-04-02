import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public user = {
    name: 'Rıfkı yenidoğan',
    job: 'TED Üniversitesi - Yazılım Mühendisliği',
    info: '500+ Bağlantı • Ankara, Türkiye',
    avatar: 'assets/img/profile-avatar.jpeg',
    backdrop : 'assets/img/profile-background.png',
    organizations: [
      {
        name: 'TED Üniversitesi',
        image: 'assets/img/ted.png',
      },
      {
        name: 'YılmazSoft •  Software Engineer',
        image: 'assets/img/yilmaz.png',
      },
    ],
    about:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    contact: {
      email: '19982002ke@gmail.com',
      phone: '555-555-5555', // 555-555-5555
      website: 'www.example.com',
      address: 'example address',
    },
    posts: [{}],
    featured: [],
    experience: [
      {
        title: 'Software Engineer',
        company: 'YılmazSoft',
        date: '2020 - Present',
        description:
          'YılmazSoft’da çeşitli projelerde yazılım mühendisi olarak yer alıyorum. Web tabanlı uygulamalar ile müşterilerimizin işlerini yeni seviyelere ulaştırmasını sağlıyoruz.',
        projects: [],
        image: 'assets/img/yilmaz.png',
        level: 'Junior Software Engineer',
        workingType: 'Full Time',
        joinDate: 'Ağustos 2021 - Ekim 2022 • 1 Yıl 2 Ay',
        talents: [
          {
            name: 'HTML',
            level: 90,
          },
          {
            name: 'CSS',
            level: 80,
          },
        ],
      },
    ],
    education: [
      {
        title: 'Yazılım Mühendisliği',
        school: 'TED Üniversitesi',
        image : 'assets/img/ted.png',
        date: '2017 - 2021',
        description:
          'Lorem ipsum dolor sit amet consectetur. Consectetur dictum auctor nec morbi diam. Maecenas proin porttitor enim viverra feugiat quam felis aliquam.',
        communuties: [
          {
            name: 'ALECED',
            image: '',
            role: 'Üye',
            joinDate: '2020 - 2021',
          },
        ],
        talents : [
          {
            name: 'HTML',
            level: 90,
          }
        ],
        educationInfo : {
          type: 'Lisans',
          startYear: '2017',
          endYear: '2021',
          gpa: '3.00',
          major: 'Yazılım Mühendisliği',
          minor: 'Bilgisayar Mühendisliği',
          school: 'TED Üniversitesi',
          schoolType: 'Üniversite',
        },
        featured : [
        ],

      },
    ],
    projects: {
      completed : [
      ],
      inProgress : []
    },
    certificates: [
      {
        name : "",
        image : "",
        date : "",
        id : "",
        accomplishments : [
        ],

      }
    ],
    communities : [
    ],
    talents : [
    ],
    interests : [
    ],
  };
}