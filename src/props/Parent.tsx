import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => {
        console.log('You clicked!');
      }}
    >
      sdadsadsa
    </ChildAsFC>
  );
};

export default Parent;
