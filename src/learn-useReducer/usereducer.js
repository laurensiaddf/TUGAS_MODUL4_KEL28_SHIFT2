import React, { useReducer } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const initialState = {count: 0};
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
      case 'reset':
        return initialState;
    default:
      throw new Error();
  }
}

export default function ReducerUse() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{textAlign:'center', display: 'inline-block', height:'83vh'}}>
      <Card hoverable style={{display: 'inline-block', width:315, margin:'15px', boxShadow:'0px 1px 1px'}} 
      cover={<img alt="gambar1" height="345px" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ea6214ba-e467-4b65-b3f2-5ab586e3a2d9/nike-react-vision-3m-by-you.jpg" />}>
        <Meta title="Nike React Vision 3M by You" description="Rp 2,389,000" />
        <div style={{margin:'5px'}}>
          <Button type="primary" shape="round" onClick={() => dispatch({type:'increment'})}>
            Add to Cart
          </Button>
          <Button type="primary" shape="round" onClick={() => dispatch({type:'decrement'})}>
            Remove Cart
          </Button>
        </div>
        <div>
          <Button type="danger" shape="round" style={{margin:'7px 25px 0px 25px'}} onClick={() => dispatch({type:'reset'})}>
            RESET
          </Button>
        </div>
        <Text>Total cart : {state.count}</Text>
        <div>
          <Text>Ini useReducer</Text>
        </div>
      </Card>
    </div>
  );
}