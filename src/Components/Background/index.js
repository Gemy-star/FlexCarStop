import React from "react";
import {FormattedMessage} from "react-intl";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const Background = props => {
    return(
        <section className="background">
              <div className="background_img">
                    <div className="background_img_txt">
                        <h3 className="background_img_txt_title"><FormattedMessage id="background.title"/></h3>
                        <h5  className="background_img_txt_sub"><FormattedMessage id="background.subtitle" /></h5>
                            <button> <FormattedMessage id="background.btn" /> <KeyboardArrowDownIcon className="background_img_ico"/> </button>
                    </div>

              </div>

        </section>
    )
}

export default Background;