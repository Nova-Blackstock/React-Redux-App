import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchADA } from '../store'

const AdaData = (props) =>{
    useEffect(() =>{
        props.fetchADA()
    }, [])


return (
    <section>
        <h1>Learn ADA!</h1>
        {props.isLoading ? <h4>Loading ADA Data...</h4> : null}
        {props.error ? (
            <p>
                Error. Try again later. {props.error}
            </p>
        ) : null}
        {props.marketData ? (
            <div>
                Work in AdaData and adaReducer
                {console.log(props.marketData)}
                <h4>Exchange in USD: ${props.marketData.usd}</h4>
                <h4>Exchange in BTC: {props.marketData.btc}</h4>
            </div>
        ) : 'marketData is empty in AdaData'}
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

export default connect(mapStateToProps, { fetchADA })(AdaData)