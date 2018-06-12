import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'firebrick',
            liked: props.liked,
            size: props.size || 30,
            onLike: props.onLike || (() => null),
            onUnlike: props.onUnlike || (() => null)
        };
        this._onPress = this._onPress.bind(this)
    }

    _onPress() {
        if (this.state.liked) {
            this.state.onUnlike()
        } else {
            this.state.onLike()
        }
        this.setState(state => ({liked: !state.liked}))
    }

    render() {
        let icon = this.state.liked ? 'md-heart' : 'md-heart-outline';
        let size = this.state.size || 30;
        let color = this.state.liked ? this.state.color : 'black';

        return (
            <TouchableOpacity onPress={this._onPress}>
                <Icon name={icon} size={size} color={color}/>
            </TouchableOpacity>
        )
    }
}