import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CompletePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="complete-page">
        <h1 className="title">{title}</h1>
        <PageContent className="content" content={content} />
    </section>
  )
}

CompletePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  templateKey: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CompletePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CompletePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        templateKey={post.frontmatter.templateKey}
        content={post.html}
      />
    </Layout>
  )
}

CompletePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CompletePage

export const completePageQuery = graphql`
  query CompletePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        templateKey
      }
    }
  }
`