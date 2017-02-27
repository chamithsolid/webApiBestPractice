namespace One.Test.Mockdata.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addImageColomn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Student", "Image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Student", "Image");
        }
    }
}
