import { Box, Typography } from "@mui/material";
import React from "react";

const ManufacturingComponent = () => {
  return (
    <Box
      sx={{
        px: 30,
        pt: 8,
        pb: 10,
        backgroundImage:
          "linear-gradient(to bottom, #686d73, #a1a5aa,#afb2b6,#c9cccf, #bcbfc2, #61656b)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Welcome Typography */}
      <Typography
        sx={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 600,
          fontSize: "35px",
          lineHeight: "35px",
          py: 2,
          pt: 5,
        }}
      >
        MANUFACTURING PROCESS
      </Typography>
      {/* STEPS Typography */}
      <Typography
        sx={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 600,
          fontSize: "50px",
          lineHeight: "50px",
          pb: 2,
        }}
      >
        STEPS
      </Typography>
      {/* # 1: STEEL Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 1: STEEL
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          The quality of steel is very important in the production of quality
          instruments. The best you select the best you produce. In order to
          ensure the finest of quality steel, we have imported or best quality
          local steel as required by valued customers.
        </Typography>
      </Box>
      {/* # 2: FORGING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 2: FORGING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          Forging is a process of cutting shaped raw instruments with the help
          of dyes and hammers. Here, the skilled hands give life to the metal
          and give it the rudimentary shape that will go through series of
          complicated processes.
        </Typography>
      </Box>
      {/* #3: MACHINING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          #3: MACHINING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          In this process forging is cut or shaped by machines i.e. cutting
          sharp edges and raw material in the shape. Here instruments are given
          their shape through grinding and hammers. For this purpose, extremely
          skilled labor is required and this process is carried out by
          instrument specialists only.
        </Typography>
      </Box>
      {/* # 4: MILLING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 4: MILLING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          Drilling of holes in the instruments where required for screws.
          Different kids of screwing machines are used and instruments are made
          pairs here. Instruments with even the slightest difference in whole
          positions will suffer otherwise.
        </Typography>
      </Box>
      {/* # 5: FILING & FITTING */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 5: FILING & FITTING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          At this stage, the steel is not too hard so the filing is used to
          shape the instruments in the exact shape they are required to be. The
          workers match the shape exactly with the samples provided at this
          stage. So the instruments get most of their shapes at this stage.
          After filling the inspection is made and measurements and shapes are
          checked according to samples.
        </Typography>
      </Box>
      {/* # 6: BOIL TREATMENT Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 6: BOIL TREATMENT
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          The technician uses boiling water to sterilize metal tools, rubber, or
          plastic when water starts to boil the item goes in for 20 minutes. At
          the end of 20 minutes, the technician carefully removes the items with
          sterilized tongs. The items are immediately moved to a sterilized
          container.
        </Typography>
      </Box>
      {/* # 7: HEAT TREATMENT Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 7: HEAT TREATMENT
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          Surgical instruments are exposed to extreme environmental conditions
          when in use and still have to fulfill the highest quality criteria in
          terms of hygiene. Technological advancements have led to substantial
          progress in providing the latter. The right choice of material sets
          the foundation for meeting quality requirements.
        </Typography>
      </Box>
      {/* #8: HARDNESS TEST Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          #8: HARDNESS TEST
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          After annealing as well as heat-treatment, the instruments are tested
          using diamond-tipped Rockwell hardness test fixtures to ensure the
          proper hardness of instruments. Surgimax quality control team sends
          instruments to independent testing institutes as well to validate the
          results.
        </Typography>
      </Box>
      {/* # 9: ACID PICKLING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 9: ACID PICKLING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          Pickling is performed by submerging metal in pickle liquor. After
          working on a piece of metal, the manufacturing company will submerge
          it in the acid solution. The pickle liquor will then eat away at any
          oxide or other impurities lingering on the surface of the metal.
        </Typography>
      </Box>
      {/* # 10: JOINT GRINDING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 10: JOINT GRINDING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          For this reason, the field of Medical Orthopedic Implant grinding has
          become an attractive diversification strategy for existing and new
          players in the CNC tool cutting business. Joint reconstructive surgery
          is largely dominated by knee, hip and shoulder procedures, all of
          which involve orthopedic implants and associated instrumentation that
          typically require grinding during the manufacturing process.
        </Typography>
      </Box>
      {/* # 11:ELECTRO CHEMICAL 1 Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 11:ELECTRO CHEMICAL 1
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          The present invention concerns an electro-chemical surgical knife
          comprising in a single instrument both a chemically assisted
          mechanical dissector and an electrical knife.
        </Typography>
      </Box>
      {/* # 12: FINAL SETTING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 12: FINAL SETTING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          There are a wide array of instruments available for use during a
          surgical procedure, each with its specific uses and advantages (and
          disadvantages). As a surgeon, it is important to know not only their
          names but when they should be used, and each specialty will have its
          own specific kit.
        </Typography>
      </Box>
      {/* # 13:SURFACE GRINDING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 13:SURFACE GRINDING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          The basic shape of the tool is often machined on Swiss-type lathes in
          a more pliable state. This includes the driving notch, which is the
          quick-disconnect and driver feature at the end of the shank. This
          operation is followed by hardening or by centerless grinding.
        </Typography>
      </Box>
      {/* # 14:RING GRINDING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 14:RING GRINDING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          Hardened instruments are next ground (using fine and extra fine wheels
          and belts) to remove deep scratches from the medium-coarse
          grinding/sizing in the previous stages. This step is also used to size
          the product as per the requirements. Typical tolerances of ± 2
          millimeters are achieved at this stage of processing.
        </Typography>
      </Box>
      {/* # 15:BEVELING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 15:BEVELING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          The slanted portion of a needle tip facilitates nontraumatic entry
          into a vein. Beveled needle tip.
        </Typography>
      </Box>
      {/* # 16:ELECTRO CHEMICAL 2 Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 16:ELECTRO CHEMICAL 2
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          After 2 grinding instruments are then electro-polished which is a
          process of smothering the surface anodically of instruments in the
          required chemical solution and gives a shiny look which also removes
          burs from instruments.
        </Typography>
      </Box>
      {/* # 17:T.C WELDING Box */}
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", pb: 5 }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "22px",
          }}
        >
          # 17:T.C WELDING
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            py: 2,
          }}
        >
          Tungsten carbide (TC) is classed as a carbide, which you’ll find in
          the overall group of ceramics, but we thought it worth a mention in
          this article too. It is composed of tungsten and carbon atoms and is
          used in the manufacture of various instruments. These include:
        </Typography>
      </Box>
    </Box>
  );
};

export default ManufacturingComponent;
// gray: #686d73
// black: #000000
// fontFamily: "'Barlow Condensed', sans-serif",
// font-family: 'Roboto', sans-serif;
