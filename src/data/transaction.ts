import personalVoucherList from './ownedVoucherList'
import personalPointList from './ownedPointList'
const userId = 'user_01'
const promotionTab = [
  {
    id: 'receipt',
    name: 'Vouchers',
    promotionList: [
      {
        id: `voucher_01#${userId}`,
        date: personalVoucherList[1].expireDate,
        maximumSpentCash: 1500000,
        voucher_id: personalVoucherList[1].id,
        img: personalVoucherList[1].img,
        name: personalVoucherList[1].name,
        count: 1,
        percent: personalVoucherList[1].percent,
      },
      {
        id: `voucher_02#${userId}`,
        date: personalVoucherList[2].expireDate,
        maximumSpentCash: 1000000,
        voucher_id: personalVoucherList[2].id,
        img: personalVoucherList[2].img,
        name: personalVoucherList[2].name,
        count: 2,
        percent: personalVoucherList[2].percent,
      },
      {
        id: `voucher_03#${userId}`,
        date: personalVoucherList[3].expireDate,
        maximumSpentCash: 100000,
        voucher_id: personalVoucherList[3].id,
        img: personalVoucherList[3].img,
        name: personalVoucherList[3].name,
        count: 1,
        percent: personalVoucherList[3].percent,
      }
    ]
  },
  {
    id: 'point',
    name: 'Points',
    promotionList: [
      {
        id: `point_01#${userId}`,
        date: personalVoucherList[2].expireDate,
        maximumSpentCash: 100000,
        point_id: personalPointList[2].id,
        img: personalPointList[2].img,
        name: personalPointList[2].name,
        count: 1,
        percent: personalPointList[2].percent,
      }
    ]
  }
]

export default promotionTab