import React from "react";
import {css} from "@emotion/core";
// First way to import
// import { ClipLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size
import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";
import FadeLoader from "react-spinners/FadeLoader";


import {FormSubmitButton} from "../components/style/register";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  transform: scale(0.5) translateY(38%);
`;

class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className="sweet-loading">
                <FormSubmitButton type="submit">로그인
                    <ClipLoader
                        css={override}
                        size={35}
                        //size={"150px"} this also works
                        color={"#36D7B7"}
                        loading={this.state.loading}
                    />

                </FormSubmitButton>
                <br/>
                <FormSubmitButton type="submit">
                    <HashLoader
                        css={override}
                        size={50}
                        //size={"150px"} this also works
                        color={"#36D7B7"}
                        loading={this.state.loading}
                    />
                </FormSubmitButton>
                <br/>
                <FormSubmitButton type="submit">
                    <FadeLoader
                        css={override}
                        color={"#36D7B7"}
                        loading={this.state.loading}
                    />
                </FormSubmitButton>



            </div>
        );
    }
}

export default AwesomeComponent;