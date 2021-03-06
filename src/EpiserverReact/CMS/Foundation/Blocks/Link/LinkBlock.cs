﻿namespace CMS.Foundation.Blocks.Link
{
    using EPiServer;
    using EPiServer.Core;
    using EPiServer.DataAnnotations;
    using Heading;

    [ContentType(DisplayName = "LinkBlock", GUID = "1a3a0f47-fa47-4c60-8a41-f749d71b4b9f", Description = "", AvailableInEditMode = false)]
    public class LinkBlock : BlockData
    {
        public virtual Url Link { get;set; }

        public virtual string Target { get; set; }

        [CultureSpecific]
        public virtual  string Text { get; set; }
    }
}