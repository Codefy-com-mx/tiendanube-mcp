## Introduction[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#introduction "Direct link to Introduction")

The Blog API allows you to manage your store's blog content, offering full functionality for creating, editing, and publishing posts.

### Key Features[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#key-features "Direct link to Key Features")

-   Create and manage blog posts
-   Control publication status (publish or unpublish posts)
-   Manage SEO metadata, including titles, descriptions, and custom profiles
-   Upload and organize images within blog post content
-   Add and manage cover images (thumbnails) for blog posts

## Required Permissions[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#required-permissions "Direct link to Required Permissions")

To use the Blog API, your application must have the following permissions activated in the Partner Panel:

-   **Edit Content** - Allows modifying and creating blog content
-   **Read Content** - Allows reading blog content

Make sure these permissions are enabled before attempting to use the Blog API endpoints.

## Core Concepts[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#core-concepts "Direct link to Core Concepts")

### **Blog**[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#blog-1 "Direct link to blog-1")

A content management system integrated into the store that enables merchants to create, manage, and publish articles, news, and other types of content to engage and inform their customers.

### **Blog Post**[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#blog-post "Direct link to blog-post")

An individual piece of content within a blog. Each post includes:

-   Rich HTML content with embedded images and media
-   SEO metadata (title, description, handle)
-   Publication status
-   Cover image (thumbnail)
-   Multi-language support

### **Cover Image (Thumbnail)**[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#cover-image-thumbnail "Direct link to cover-image-thumbnail")

The main representative image for a blog post, displayed in post listings, previews, and social media shares.

___

## Blog Management[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#blog-management "Direct link to Blog Management")

Retrieve your store's blog information, including the blog ID required for all other Blog API operations.

### Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

#### **GET** `/blogs`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-blogs "Direct link to get-blogs")

Retrieves the blog associated with the store.

**Response** **Error Responses**

___

## Blog Post Management[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#blog-post-management "Direct link to Blog Post Management")

Blog posts are the main content of your blog. They allow stores to create engaging articles with rich HTML content, images, and SEO-optimized metadata.

### Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints-1 "Direct link to Endpoints")

#### **GET** `/blogs/{blog_id}/posts`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-blogsblog_idposts "Direct link to get-blogsblog_idposts")

Retrieves a paginated list of blog posts for a specific blog.

**URL Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `blog_id` | string | ID of the blog to retrieve posts from |

**Query Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `page` | number | Page number for pagination (default: 1) |

**Response** **Error Responses**

#### **GET** `/blogs/{blog_id}/posts/{post_id}`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-blogsblog_idpostspost_id "Direct link to get-blogsblog_idpostspost_id")

Retrieves a specific blog post by its ID.

**URL Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `blog_id` | string | ID of the blog containing the post |
| `post_id` | string | ID of the specific post to retrieve |

**Response** **Error Responses**

#### **POST** `/blogs/{blog_id}/posts`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-blogsblog_idposts "Direct link to post-blogsblog_idposts")

Creates a new blog post with rich content and metadata.

**URL Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `blog_id` | string | ID of the blog where the post will be created |

**Request Body (multipart/form-data):**

| Parameter | Type | Description |
| --- | --- | --- |
| `metadata` | string | JSON string containing post metadata. Must include a non-empty "language" field along with title, summary, seo\_title, seo\_description, and handle |
| `content` | string | Rich HTML content of the blog post, including any embedded images (optional) |
| `published` | boolean | Indicates whether the post should be published immediately (optional, default: false) |
| `thumbnail` | string | URL of the cover image representing the blog post (optional) |

**Response** **Error Responses**

#### **PUT** `/blogs/{blog_id}/posts/{post_id}`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-blogsblog_idpostspost_id "Direct link to put-blogsblog_idpostspost_id")

Updates an existing blog post with new content and metadata.

**URL Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `blog_id` | string | ID of the blog containing the post |
| `post_id` | string | ID of the post to update |

**Request Body (multipart/form-data):**

| Parameter | Type | Description |
| --- | --- | --- |
| `metadata` | string | JSON string containing updated post metadata. Must include a non-empty "language" field along with title, summary, seo\_title, seo\_description, and handle |
| `content` | string | Updated rich HTML content of the blog post with embedded images and media (optional) |
| `published` | boolean | Updated publication status (optional) |
| `thumbnail` | string | Updated cover image URL (optional) |

**Response** **Error Responses**

#### **DELETE** `/blogs/{blog_id}/posts/{post_id}`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-blogsblog_idpostspost_id "Direct link to delete-blogsblog_idpostspost_id")

Permanently deletes a blog post and all associated data.

**URL Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `blog_id` | string | ID of the blog containing the post |
| `post_id` | string | ID of the post to delete |

**Response** **Error Responses**

___

## Publication Control[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#publication-control "Direct link to Publication Control")

Manage the visibility of your blog posts by choosing whether to publish or unpublish them. Published posts are visible to your audience, while unpublished ones remain saved as drafts.

### Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints-2 "Direct link to Endpoints")

#### **PATCH** `/blogs/{blog_id}/posts/{post_id}/publish`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-blogsblog_idpostspost_idpublish "Direct link to patch-blogsblog_idpostspost_idpublish")

Publishes a blog post, making it visible to customers.

**URL Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `blog_id` | string | ID of the blog containing the post |
| `post_id` | string | ID of the post to publish |

**Response** **Error Responses**

#### **PATCH** `/blogs/{blog_id}/posts/{post_id}/unpublish`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-blogsblog_idpostspost_idunpublish "Direct link to patch-blogsblog_idpostspost_idunpublish")

Unpublishes a blog post, hiding it from public view while keeping it as a draft.

**URL Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `blog_id` | string | ID of the blog containing the post |
| `post_id` | string | ID of the post to unpublish |

**Response** **Error Responses**

___

## Upload Management[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#upload-management "Direct link to Upload Management")

Upload and manage images for your blog posts, including content and cover images. Content images help illustrate and enrich your articles, while cover images give your posts a strong visual identity that attracts readers.

### Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints-3 "Direct link to Endpoints")

#### **POST** `/blogs/{blog_id}/posts/media`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-blogsblog_idpostsmedia "Direct link to post-blogsblog_idpostsmedia")

Uploads images for use within blog post content.

**Important:** This endpoint only returns the URL of the uploaded file. You must immediately use this URL in the HTML content of your blog post.

**URL Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `blog_id` | string | ID of the blog where media will be uploaded |

**Request Body (multipart/form-data):**

| Parameter | Type | Description |
| --- | --- | --- |
| `media` | file | Image file to use as content image |

**Response** **Error Responses**

#### **POST** `/blogs/{blog_id}/posts/thumbnail`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-blogsblog_idpoststhumbnail "Direct link to post-blogsblog_idpoststhumbnail")

Uploads the main or cover image for a blog post.

**Important:** This endpoint only returns the URL of the uploaded file. You must immediately use this URL to update the blog post with the new thumbnail.

**URL Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `blog_id` | string | ID of the blog where thumbnail will be uploaded |

**Request Body (multipart/form-data):**

| Parameter | Type | Description |
| --- | --- | --- |
| `image` | file | Image file to use as cover image |

**Response** **Error Responses**

___

## Final Notes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#final-notes "Direct link to Final Notes")

When using the Blog API, follow these best practices:

-   Handle errors gracefully and inform users when operations fail.
-   Optimize and validate images to ensure fast loading and proper display (JPEG for photos, PNG for transparency).
-   Respect file size limits (recommended: ≤500 KB; up to 1024×1024 px for square and 1024×1800 px for rectangular images).
-   Validate HTML content before submission to ensure correct formatting and embedded media.
-   Include descriptive metadata (SEO title and description) to improve search visibility.
-   Test posts across devices and browsers to confirm consistent rendering.
-   Manage publication status carefully — unpublished posts remain as drafts and are not visible to readers.