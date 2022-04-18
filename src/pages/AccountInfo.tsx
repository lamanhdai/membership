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
          <div className="welcome-text">Welcome, Bruce!</div>
          <div className="bg-white rounded-lg mt-2.5">
            <div className="grid grid-cols-6 p-4 user_summary">
              <div>
                <div className="flex items-center">
                  <img src={iconReward} alt="" className="w-8"/>
                  <span className="user_card_feature">E-Vouchers</span>
                </div>
                <div className="user_card_text ml-10">0</div>
              </div>
              <div className="col-span-4 relative">
                <div className="rounded-full absolute user_background_level">
                  <div className="rounded-full user_level p-2.5">
                    <div className="user_level_content text-center">
                      <img src={iconMainStar} alt="" className="m-auto"/>
                      <div className="user_card_feature mt-3">Apprentice</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-6">
                <div className="flex items-center">
                  <img src={iconStar} alt="" className="w-8"/>
                  <span className="user_card_feature">Points</span>
                </div>
                <div className="user_card_text ml-10">0</div>
              </div>
            </div>
            <div className="wave"><svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg" width="50%" className="inline" style={{position: "absolute",bottom: "-30px",left: "2px"}}><ellipse cx="50" cy="5" rx="51" ry="5" fill="#FF9595"></ellipse></svg><svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg" width="50%" className="inline" style={{position: "absolute",right: "1px",bottom: "-19px",zIndex: 2}}><ellipse cx="50" cy="5" rx="51" ry="5" fill="white"></ellipse></svg></div>
            <div className="user_navigantion p-4 rounded-b relative">
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
    </div>
  )
}

export default AccountInfo;