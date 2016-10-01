const React = require('react');
const intl = require('react-intl');
const ReactRedux = require('react-redux');

const I18nProvider = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        // TODO
        const messages = {};

        return (
            <intl.IntlProvider locale={'en'} messages={messages}>
                {this.props.children}
            </intl.IntlProvider>
        );
    }
});

const mapStateToProps = state => {
    return { messages: state.i18n.messages };
};

module.exports = ReactRedux.connect(mapStateToProps)(I18nProvider);