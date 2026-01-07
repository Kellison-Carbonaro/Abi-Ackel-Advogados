using AbiAckel.Api.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace AbiAckel.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IndicadoresController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IndicadoresDto> Get()
        {
            var indicadores = new IndicadoresDto
            {
                ProcessosAtivos = 120,
                ProcessosGanhos = 35,
                ProcessosPerdidos = 10,
                PrazoMedioDias = 18,
                AudienciasSemana = 5
            };

            return Ok(indicadores);
        }
    }
}
