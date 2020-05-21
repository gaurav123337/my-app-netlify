import React, {
  Component
} from "react";



class Detail extends Component {

  renderDes = (detailItem) => {
  // let html = '';
  //  for(item in detailItem){
  //     html = <li><span>{item}:</span><span>detailItem[item]</span></li>
  //   }
  //   return html;
  console.log()
}
  render() {
    const {
      detailItem
    } = this.props;

    return (
      <>
      <ul>
        {
          this.renderDes(detailItem)
        }
      </ul>
      </>
    )
  }
}



export default Detail;
