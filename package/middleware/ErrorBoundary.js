import React from "react";
import CoreDivider from "../core/components/dataDisplay/CoreDivider";
import CoreH6 from "../core/components/dataDisplay/heading/CoreH6";
import CoreTypographyBody1 from "../core/components/dataDisplay/paragraph/CoreTypographyBody1";
import CoreTypographyCaption from "../core/components/dataDisplay/paragraph/CoreTypographyCaption";
import CoreBox from "../core/components/layouts/CoreBox";
import CoreAccordion from "../core/components/surfaces/CoreAccordion";
import CoreAccordionDetail from "../core/components/surfaces/CoreAccordionDetail";
import CoreAccordionSummary from "../core/components/surfaces/CoreAccordionSummary";
import CoreClasses from "./../core/styles/CoreClasses";
import ReportIssueForm from "./../module/support/ReportIssueForm";

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
    return { hasError: true, error: error };
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
              <CoreH6 styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>Error Reported</CoreH6>
            </CoreAccordionSummary>
            <CoreAccordionDetail>
              <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>
                Message: {this.state.error?.message}
              </CoreTypographyBody1>
              <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>
                Stacktrace:
              </CoreTypographyBody1>
              <CoreTypographyCaption styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>
                <pre>{this.state.error?.stack}</pre>
              </CoreTypographyCaption>
              <CoreTypographyCaption styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>
                <pre>{this.state.errorInfo?.componentStack}</pre>
              </CoreTypographyCaption>
            </CoreAccordionDetail>
          </CoreAccordion>
          <CoreDivider />
          <ReportIssueForm
            labels={[{ label: "Bug" }]}
            title={this.state.error?.message}
            isStacktrace={false}
            stackTrace={this.state.error?.stack + "\n\n" + this.state.errorInfo?.componentStack}
          />
        </CoreBox>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
