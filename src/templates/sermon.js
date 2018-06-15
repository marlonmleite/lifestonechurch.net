import React from "react";
import styled from "react-emotion";
import formatDate from "../utils/formatDate";

const OtherStuff = ({ data }) => {
  const sermon = data.contentfulSermon;
  return (
    <div>
      {sermon.speaker.map(
        s =>
          console.log(s) ||
          (s.photo && s.photo.file && <img src={s.photo.file.url} />)
      )}
      <div>{sermon.audioDuration}</div>
      <div>{sermon.sermonSeries && sermon.sermonSeries.name}</div>
      <img
        src={
          sermon.sermonSeries &&
          sermon.sermonSeries.image &&
          sermon.sermonSeries.image.file.url
        }
      />
    </div>
  );
};

const Audio = styled.audio`
  width: 100%;
  margin: 40px 0;
`;

export default ({ data }) => {
  const sermon = data.contentfulSermon;

  console.log(formatDate(sermon.date));
  return (
    <div>
      <h1>{sermon.title}</h1>
      <div>{formatDate(sermon.date)}</div>
      <div>{sermon.speaker.map(s => <span key={s.id}>{s.name}</span>)}</div>
      <div>{sermon.mainScripture}</div>
      <Audio controls src={sermon.audioUrl} />
      {sermon.fields.notesFormatted && (
        <div>
          <h2>Sermon Notes</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: sermon.fields.notesFormatted
            }}
          />
        </div>
      )}
    </div>
  );
};

export const query = graphql`
  query SermonTemplateQuery($id: String!) {
    contentfulSermon(id: { eq: $id }) {
      title
      date
      audioUrl
      audioDuration
      sermonSeries {
        name
        image {
          title
          file {
            url
          }
        }
      }
      speaker {
        id
        name
        photo {
          file {
            url
          }
        }
      }
      mainScripture
      fields {
        notesFormatted
      }
    }
  }
`;
