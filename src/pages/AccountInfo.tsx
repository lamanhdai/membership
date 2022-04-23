import Navigation from 'components/Navigation'
import './AccountInfo.css'
import iconStar from 'assets/img/star.png'
import iconReward from 'assets/img/reward.png'
import iconMainStar from 'assets/img/main_star.png'

function AccountInfo() {
  return (
    <div className="bg-account">
      <Navigation/>
      <div className="container mx-auto">
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 1.25 39 2.75" className="block">
                <path d="M -4 3 L -4 4 L -4 2 C 2 1 7 1 15 2 C 24 3 29 3 35 2 L 35 4 L -4 4" fill="#FF9595"/>
              </svg>

              <div className="user_navigantion p-4 rounded-b relative">
              </div>
            </div>
            <div className="absolute background-line">
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 1.25 39 3.905" className="curve-line">
                <path d="M -4 2 C 2 1 7 1 15 2 C 25 4 30 3 35 2 L 35 4 C 30 5 25 6 15 4 C 7 3 2 3 -4 4" fill="#FF9595"/>
              </svg>
              <div className="bg-white absolute backscene"></div>
            </div>
          </div>
          
        </div>
        <div>0 point expiring on 30 Jun 2023</div>

          <div>
            <div>Transaction History</div>
            <div>Showing past 3 months of transactions</div>
            <div>
              <div>Receipts</div>
              <div>Points</div>
            </div>
            <div>No Transaction Founds.</div>
          </div>
      </div>
    </div>
  )
}

export default AccountInfo;