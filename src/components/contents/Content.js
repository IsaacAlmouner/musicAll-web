import React, { Component } from 'react'
import UpperContent from './UpperContent'
import LowerContent from './LowerContent'

export class Content extends Component {
    render() {
        return (
            <div>
                <UpperContent/>
                <LowerContent/>
            </div>
        )
    }
}

export default Content
