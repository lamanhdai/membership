import * as voucher_01 from 'assets/img/promotion/aviation.jpg'
import * as voucher_02 from 'assets/img/promotion/clothing.jpeg'
import * as voucher_03 from 'assets/img/promotion/food.jpeg'
import * as voucher_04 from 'assets/img/promotion/hotel.jpeg'
import * as voucher_05 from 'assets/img/promotion/shoes.jpg'
import * as voucher_06 from 'assets/img/promotion/spa.jpeg'

const voucherList = [
  {
    id: 'voucher_01',
    img: voucher_01,
    name: 'Get voucher to have aviation discount 10%',
    limit: 1,
    pointOfLevel: 100,
    percent: '10%',
    maximumSpentCash: 100000,
    expireDate: '25/04/2022',
  },
  {
    id: 'voucher_02',
    img: voucher_02,
    name: 'Be off clothing 20% for mostly popular brands',
    limit: 10,
    pointOfLevel: 0,
    percent: '10%',
    maximumSpentCash: 1500000,
    expireDate: '25/04/2022',
  },
  {
    id: 'voucher_03',
    img: voucher_03,
    name: 'Go out and have a delicious meal up sale 15%',
    limit: 100,
    pointOfLevel: 0,
    percent: '10%',
    maximumSpentCash: 1500000,
    expireDate: '25/04/2022',
  },
  {
    id: 'voucher_04',
    img: voucher_04,
    name: 'To relax at luxury hotel in Miami with discount 5%',
    limit: 10,
    pointOfLevel: 0,
    percent: '10%',
    maximumSpentCash: 1500000,
    expireDate: '25/04/2022',
  },
  {
    id: 'voucher_05',
    img: voucher_05,
    name: 'Don\'t hesitate get the most beautiful shoes with the price down to 12%',
    limit: 100,
    pointOfLevel: 0,
    percent: '10%',
    maximumSpentCash: 1500000,
    expireDate: '25/04/2022',
  },
  {
    id: 'voucher_06',
    img: voucher_06,
    name: 'Hurry! It\'s a complimentary service',
    limit: 10,
    pointOfLevel: 0,
    percent: '10%',
    maximumSpentCash: 1500000,
    expireDate: '25/04/2022',
  }
]

export default voucherList