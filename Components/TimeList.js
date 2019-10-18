import React from "react"
import { ScrollView } from "react-native"

import TimeAndGrade from "./TimeAndGrade"

export default class TimeList extends React.Component {
  renderItem = (count, i) => {
    return <TimeAndGrade count={count} i={i} key={i} />
  }

  render() {
    return (
      <ScrollView
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd()
        }}
      >
        {this.props.list.map(
          (count, i) => this.renderItem(count, i)
        )}
      </ScrollView>
    )
  }
}
