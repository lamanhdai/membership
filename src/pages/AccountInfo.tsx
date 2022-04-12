import Navigation from 'components/Navigation'

function AccountInfo() {
  return (
    <div>
      <Navigation/>
      <div>Welcome, username</div>
      <div>You Have 0 points</div>
      <div>0 point expiring on 30 Jun 2023</div>

      <div>0 E-Vouchers</div>
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
  )
}

export default AccountInfo;