import React from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
interface props {
  visible?: boolean

}
export default function ActivityIndicator({visible=true}:props) {

  return (

    <>
 { visible&&  <div className="activityIndicator">

      <AiOutlineLoading3Quarters className="activityIndicator__svg" />

    </div>}
    </>

  );
}
