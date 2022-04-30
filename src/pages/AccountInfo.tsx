import {useState} from 'react'
import Navigation from 'components/Navigation'
import './AccountInfo.css'
import iconStar from 'assets/img/star.png'
import iconReward from 'assets/img/reward.png'
import iconMainStar from 'assets/img/main_star.png'
import clock from 'assets/img/clock.png'
import iconGroupStar from 'assets/img/group_star.png'
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
    point: 5,
    category: 'new'
  },
  {
    id: 'voucher_02',
    img: voucher_02,
    name: 'Be off clothing 20% for mostly popular brands',
    limit: 10,
    point: 2,
    category: 'new'
  },
  {
    id: 'voucher_03',
    img: voucher_03,
    name: 'Go out and have a delicious meal up sale 15%',
    limit: 100,
    point: 2,
    category: 'new'
  },
  {
    id: 'voucher_04',
    img: voucher_04,
    name: 'To relax at luxury hotel in Miami with discount 5%',
    limit: 10,
    point: 20,
    category: 'new'
  },
  {
    id: 'voucher_05',
    img: voucher_05,
    name: 'Don\'t hesitate get the most beautiful shoes with the price down to 12%',
    limit: 100,
    point: 1,
    category: 'new'
  },
  {
    id: 'voucher_06',
    img: voucher_06,
    name: 'Hurry! It\'s a complimentary service',
    limit: 10,
    point: 0,
    category: 'new'
  }
]
function AccountInfo() {
  const transactionTab = [
    {
      id: 'receipt',
      name: 'Receipts',
      transactionList: [
        {
          id: 'transaction_01',
          date: '25/04/2022',
          cash: 1500000,
          voucher_id: voucherList[0].id,
          img: voucherList[0].img,
          name: voucherList[0].name,
          category: voucherList[0].category,
          count: 1
        },
        {
          id: 'transaction_02',
          date: '25/04/2022',
          cash: 1000000,
          voucher_id: voucherList[1].id,
          img: voucherList[1].img,
          name: voucherList[1].name,
          category: voucherList[1].category,
          count: 1
        },
        {
          id: 'transaction_03',
          date: '25/04/2022',
          cash: 100000,
          voucher_id: voucherList[2].id,
          img: voucherList[2].img,
          name: voucherList[2].name,
          category: voucherList[2].category,
          count: 1
        }
      ]
    },
    {
      id: 'point',
      name: 'Points',
      transactionList: []
    }
  ]
  const [activeTab, setActiveTab] = useState(transactionTab[0])

  return (
    <div className="">
      <Navigation/>
      <div className="container mx-auto user">
        <div className="user_card user_top">
          <div className="relative">
            <div className="welcome-text">Welcome, Bruce!</div>
            <div className="bg-white rounded-lg mt-2.5 z-10 relative">
              <div className="grid grid-cols-5 p-4 user_summary">
                <div>
                  <div className="flex items-center">
                    <img src={iconReward} alt="" className="w-8"/>
                    <span className="user_card_feature">E-Vouchers</span>
                  </div>
                  <div className="user_card_text ml-10">0</div>
                </div>
                <div className="col-span-3 relative">
                  <div className="rounded-full absolute user_background_level">
                    <div className="rounded-full user_level p-2.5">
                      <div className="user_level_content text-center">
                        <img src={iconMainStar} alt="" className="m-auto"/>
                        <div className="user_card_feature mt-3">Apprentice</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-5">
                  <div className="flex items-center">
                    <img src={iconStar} alt="" className="w-8"/>
                    <span className="user_card_feature">Points</span>
                  </div>
                  <div className="user_card_text ml-10">0</div>
                </div>
              </div>
              <div className="user_navigation pb-4 px-4 rounded-b shadow-xl">
                <button className="px-6 py-2.5 bg-white font-medium text-md leading-tight rounded-full shadow-md hover:shadow-lg btn-primary"><img src={clock} alt="" className="button-has-left-icon"/> <span className="button-text">History</span></button>
              </div>
            </div>
            <div className="absolute background-line">
              <img src={iconGroupStar} alt="" className="group-star"/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 1.25 39 2.75" className="absolute left-0 right-0 block wave">
                <path d="M -4 3 L -4 4 L -4 2 C 2 1 7 1 15 2 C 24 3 29 3 35 2 L 35 4 L -4 4" fill="#FF9595"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 1.25 39 3.905" className="curve-line">
                <path d="M -4 2 C 2 1 7 1 15 2 C 25 4 30 3 35 2 L 35 4 C 30 5 25 6 15 4 C 7 3 2 3 -4 4" fill="#FF9595"/>
              </svg>
              <div className="bg-white absolute backscene"></div>
            </div>
          </div>
        </div>
        <div className="bg-notice text-center text-white mt-5 pt-1">0 point expiring on 30 Jun 2023</div>
        <div className="tab shadow-md mb-5">
          {
            transactionTab.map(transaction => (
              <div className={`item ${transaction.id===activeTab.id&&'active'}`} key={transaction.id} onClick={() => setActiveTab(transaction)}>
                {transaction.name}
              </div>
            ))
          }
        </div>
        <div className="pt-5 grid grid-cols-3 gap-4">
          {
            activeTab.transactionList?.length?
              activeTab.transactionList.map(detail => (
                <div key={detail.id} className="shadow-lg cursor-pointer">
                  <img className="aspect-video w-96 rounded-t-2xl object-cover object-center" src={detail.img.default} />
                  <div className="p-4">
                    <small className="voucher-category">{detail.category}</small>
                    <h1 className="text-lg font-medium text-slate-600 pb-2">{detail.name}</h1>
                  </div>
                </div>
              )) :
              <div>No Transaction Founds.</div>
          }
        </div>
        {/* <div>Showing past 3 months of transactions</div> */}
      </div>
    </div>
  )
}

export default AccountInfo;