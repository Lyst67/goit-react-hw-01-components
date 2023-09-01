import { Profile } from "./Profile/Profile";
import { Section } from "./Section";
import user from '../user.json'

 export const App = () => {
   return (
     <>
        <Section title='Profile Section'>
      <Profile username={user.username} tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}/>   
     </Section>

     <Section title='Statistic Section'></Section>
     </>
    
     )}; 
  
    //  <Section title='Statistics Section'>
    //     <Statistics title='Upload stats' stats={data} />
    //   </Section>
    //   <Section title='Friends list'>
    //     <FriendList friends={friends} />
    //   </Section>
    //   <Section title='Transaction history'>
    //     <TransactionHistory items={transactions} />
    //   </Section>
 
   

 
