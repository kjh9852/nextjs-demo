import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
    // MeetupList 컴포넌트는 메인페이지에 사용되며
    // map으로 MeetupList를 객체수 만큼 반복실행 props로 정보를 가져옴
  );
}

export default MeetupList;
