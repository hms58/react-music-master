import React from 'react'
import {withRouter} from 'react-router-dom'
import style from './style/index.module.less'
import {get} from '@/utils/ajax'
import Loading from '@/components/Loading'
import NavBar from '@/components/NavBar'
import HeaderInfo from '@/components/HeaderInfo'

@withRouter
class Detail extends React.Component{
    state = {
        detail:{},
        loading:false //页面loading
    }

    componentDidMount(){
        const id = this.props.match.params.id
        this.getDetail(id)
    }
    getDetail = async (id)=>{
        this.setState({
            loading:true
        })
        const res = await get(`/playlist/detail?id=${id}`)
        console.log(res)
        this.setState({
            detail:res.playlist || {},
            loading:false
        })
    }
    render(){
        const {loading,detail} = this.state
        return (
            <div className={style.container}>
                <div style={{display:detail.name?'':'none'}}>
                    <NavBar>{detail.name}</NavBar>
                    <HeaderInfo info={detail}>

                    </HeaderInfo>

                </div>
                <Loading loading={loading}/>
            </div>
        )
    }
}

export default Detail