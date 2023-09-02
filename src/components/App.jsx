import { Profile } from "./Profile/Profile";
import { Section } from "./Section";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'

 export const App = () => {
   return (
     <>
        <Section title='Profile Section'>
      <Profile username={user.username} tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}/>   
     </Section>

       <Section title='Statistic Section'>
         <Statistics title="Upload stats" stats={data} /> 
         {/* <Statistics stats={data} /> */}
       </Section>
       
       <Section title='Friends list'>
         <FriendList friends={friends} />
       </Section>
       
      <Section title='Transaction history'>
        <TransactionHistory items={transactions} />
      </Section>

     </>
    
     )}; 
  
 
   

 
