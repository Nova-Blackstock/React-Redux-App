import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchXRP } from '../store'

const XrpData = (props) =>{
    useEffect(() =>{
        props.fetchXRP()
    }, [])


return (
    <section>
        <h1>Learn XRP!</h1>
        {props.isLoading ? <h4>Loading XRP Data...</h4> : null}
        {props.error ? (
            <p>
                Error. Try again later. {props.error}
            </p>
        ) : null}
        {props.marketData ? (
            <div>
                Work in XrpData and xrpReducer
                {console.log(props.marketData)}
                <h4>Exchange in USD: ${props.marketData.usd}</h4>
                <h4>Exchange in BTC: {props.marketData.btc}</h4>
            </div>
        ) : 'marketData is empty in XrpData'}
    </section>
  )
}

const mapStateToProps = (state) =>{
    return {
        marketData: state.marketData,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchXRP })(XrpData)