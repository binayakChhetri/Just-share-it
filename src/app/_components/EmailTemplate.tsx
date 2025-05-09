import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const EmailTemplate = ({
  fileName,
  fileSize,
  emailToSend,
  url,
  sendTime,
  fileType,
}: any) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Someone shared a file with you</Preview>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {emailToSend.split("@")[0]}, someone has shared a file with
                  you
                </Heading>

                <Text style={paragraph}>
                  <b>File name: </b>
                  {fileName}
                </Text>
                <Text style={paragraph}>
                  <b>Time: </b>
                  {sendTime}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Size: </b>
                  {fileSize} MB
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File type: </b>
                  {fileType}
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  <b>File link:</b>
                  {url}
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={buttonContainer} colSpan={2}>
                <Button style={button} href={url}>
                  Click here to get the file
                </Button>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2025 | Just Share It. Kathmandu, Nepal | All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const buttonContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  display: "inline-block",
  padding: "12px 30px",
  textDecoration: "none",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};
