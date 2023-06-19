import CoreIcon from "../../dataDisplay/CoreIcon";
import CoreTooltip from "../../dataDisplay/CoreTooltip";
import CoreTypographyBody2 from "../../dataDisplay/paragraph/CoreTypographyBody2";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";
import CoreStack from "../../layouts/CoreStack";
import CoreLink from "../../navigation/CoreLink";

export default function CorePhoneLink(props) {
    const { limitChars = 30, phone, verified, tooltipPlacement = "bottom", size = "medium" } = props;

    const renderPhoneLinkComp = () => {
        return (
            <>
                {phone ? (
                    <CoreStack direction={"row"} spacing={1}>
                        <CoreLink href={`mailto:${phone}`}>
                            {size === "small" ? (
                                <CoreTypographyCaption hideSeeMore={true} limitChars={limitChars}>
                                    {phone}
                                </CoreTypographyCaption>
                            ) : (
                                <CoreTypographyBody2 hideSeeMore={true} limitChars={limitChars}>
                                    {phone}
                                </CoreTypographyBody2>
                            )}
                        </CoreLink>

                        {phone && verified !== undefined && (
                            <CoreIcon fontSize={"small"} color={verified ? "success" : "warning"}>
                                {verified ? "check_circle" : "error_outline"}
                            </CoreIcon>
                        )}
                    </CoreStack>
                ) : (
                    <>
                        {size === "small" ? (
                            <CoreTypographyCaption hideSeeMore={true} limitChars={limitChars}>
                                {"Not Available"}
                            </CoreTypographyCaption>
                        ) : (
                            <CoreTypographyBody2 hideSeeMore={true} limitChars={limitChars}>
                                {"Not Available"}
                            </CoreTypographyBody2>
                        )}
                    </>
                )}
            </>
        );
    };

    return (
        <>
            {phone && phone.length > limitChars ? (
                <CoreTooltip title={phone} arrow placement={tooltipPlacement}>
                    {renderPhoneLinkComp()}
                </CoreTooltip>
            ) : (
                <>{renderPhoneLinkComp()}</>
            )}
        </>
    );
}
