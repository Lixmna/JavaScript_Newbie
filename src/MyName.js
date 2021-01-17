import React from 'react'

class Myname extends React.Component {
    static defaultProps = {
        name: '기본이름'
    }
    render() {
        return (
            <div>
                안녕하세요 ! 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        )
    }
}

export default Myname;