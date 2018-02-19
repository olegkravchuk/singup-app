import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';


class ThirdStep extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    onDashboardBtnClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <div className="icon-block">
          <Glyphicon glyph="ok" className="icon-block__ok"/>
        </div>
        <div className="btn-block">
          <button className="btn btn-link go-to-dashboard-btn" onClick={this.props.onDashboardBtnClick}>Go to Dashboard</button>
        </div>
        <style jsx>{`
          .icon-block {
            display: block;
            text-align: center;
            font-size: 34px;
            background: #95d66e;
            width: 150px;
            height: 150px;
            padding: 58px;
            border-radius: 50%;
            margin: 0 auto;
            color: #fff;
          }
          .icon-block .icon-block__ok {

          }
          .btn-block {
            text-align: center;
            margin-top: 45px;
          }
          .go-to-dashboard-btn {
            font-size: 17px;
            display: inline-block;
            vertical-align: middle;
            color: #66a9e2;
            border: 1px solid #66a9e2;
            text-decoration: none;
          }
          .go-to-dashboard-btn:after {
            content: '\u2192';
            display: inline-block;
            vertical-align: middle;
            padding-bottom: 5px;
            margin-left: 5px;
          }
        `}</style>
      </div>
    );
  }
}

export default connect()(ThirdStep);
