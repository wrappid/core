import React from "react";

import CoreDivider from "../components/dataDisplay/CoreDivider";
import CoreH6 from "../components/dataDisplay/heading/CoreH6";
import CoreTypographyBody1 from "../components/dataDisplay/paragraph/CoreTypographyBody1";
import CoreTypographyCaption from "../components/dataDisplay/paragraph/CoreTypographyCaption";
import CoreBox from "../components/layouts/CoreBox";
import CoreAccordion from "../components/surfaces/CoreAccordion";
import CoreAccordionDetail from "../components/surfaces/CoreAccordionDetail";
import CoreAccordionSummary from "../components/surfaces/CoreAccordionSummary";
import ReportIssueForm from "../modules/support/ReportIssueForm";
import CoreClasses from "../styles/CoreClasses";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.error("------------------------------");
    console.error("------------------------------");
    console.error("Error in getDerivedStateFromError");
    console.error("------------------------------");
    console.error(error);
    console.error("------------------------------");
    console.error("------------------------------");
    return { error: error, hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.error("------------------------------");
    console.error("------------------------------");
    console.error("Error in componentDidCatch");
    console.error("------------------------------");
    console.error(errorInfo);
    console.error("------------------------------");
    console.error(error);
    console.error("------------------------------");
    console.error("------------------------------");
    this.setState({ errorInfo: errorInfo });
    this.props.setHasError(true);
  }

  componentDidUpdate(prevProps, _previousState) {
    if (!this.props.hasError && prevProps.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <CoreBox styleClasses={[CoreClasses.MARGIN.M1]}>
          <CoreAccordion>
            <CoreAccordionSummary>
              <CoreH6 styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>
                Error Reported
              </CoreH6>
            </CoreAccordionSummary>

            <CoreAccordionDetail>
              <CoreTypographyBody1
                code={true}
                styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}
              >
                Message: {this.state.error?.message}
              </CoreTypographyBody1>

              <CoreDivider />

              <CoreTypographyBody1
                code={true}
                styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}
              >
                Stacktrace:
              </CoreTypographyBody1>

              <CoreTypographyCaption
                styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}
              >
                {this.state.error?.stack}
              </CoreTypographyCaption>

              <CoreTypographyCaption
                styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}
              >
                {this.state.errorInfo?.componentStack}
              </CoreTypographyCaption>
            </CoreAccordionDetail>
          </CoreAccordion>

          <CoreDivider />

          <ReportIssueForm
            labels={[{ label: "Bug" }]}
            title={this.state.error?.message}
            isStacktrace={false}
            stackTrace={
              this.state.error?.stack +
              "\n\n" +
              this.state.errorInfo?.componentStack
            }
          />
        </CoreBox>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
