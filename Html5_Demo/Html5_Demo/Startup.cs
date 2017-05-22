using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Html5_Demo.Startup))]
namespace Html5_Demo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
