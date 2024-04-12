import Header from "../../components/CategoriesHeader";
import Footer from "../../components/CategoriesFooter";
import ConversationItem from './components/ConversationItem';
import { data } from './data';


function ConversastionList() {
  return (
    <div className="app">
      <Header />
      {data.map((conversation) => (
        <ConversationItem
          key={conversation.conversationid}
          user={conversation.receiver}
          title={`${conversation.receiver.firstname} ${conversation.receiver.lastname}`}
          content={conversation.lastMessage.content}
          unreadMessagesCount={conversation.unreadMessagesCount}
          date={conversation.lastMessage.date}
        />
      ))}
      <Footer />
    </div>
  );
}

export default ConversastionList;
